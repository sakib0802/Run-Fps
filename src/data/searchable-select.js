export function fuzzyMatch(text, query) {
  text = text.toLowerCase();
  query = query.toLowerCase().trim();
  if (!query) return true;
  let qi = 0;
  for (let ti = 0; ti < text.length && qi < query.length; ti++) {
    if (text[ti] === query[qi]) qi++;
  }
  return qi === query.length;
}

export function setupFilteredSelect(inputId, selectId, items, labelKey) {
  const input = document.getElementById(inputId);
  const select = document.getElementById(selectId);
  if (!input || !select) return;

  input.addEventListener('input', () => {
    const query = input.value;
    const selectedValue = select.value;

    select.innerHTML = items
      .map((item, index) => ({ item, index }))
      .filter(({ item }) => fuzzyMatch(item[labelKey], query))
      .map(({ item, index }) => `<option value="${index}">${item[labelKey]}</option>`)
      .join('');

    if (selectedValue && items[parseInt(selectedValue, 10)]) {
      const stillVisible = [...select.options].some(o => o.value === selectedValue);
      if (stillVisible) select.value = selectedValue;
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && select.options.length > 0) {
      select.value = select.options[0].value;
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
  });
}

