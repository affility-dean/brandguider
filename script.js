const fonts = [
  'Roboto',
  'Open Sans',
  'Lato',
  'Montserrat',
  'Oswald',
  'Raleway',
  'Poppins',
  'Source Sans Pro'
];

function populateFonts() {
  const select = document.getElementById('fontSelect');
  fonts.forEach(font => {
    const option = document.createElement('option');
    option.value = font;
    option.textContent = font;
    option.style.fontFamily = font;
    select.appendChild(option);
  });
  updateFont(select.value);
}

function updateFont(font) {
  WebFont.load({
    google: { families: [font] },
    active: () => {
      document.documentElement.style.setProperty('--font-family', `'${font}', sans-serif`);
    }
  });
}

document.getElementById('fontSelect').addEventListener('change', e => updateFont(e.target.value));

document.getElementById('weightInput').addEventListener('input', e => {
  document.documentElement.style.setProperty('--font-weight', e.target.value);
});

document.getElementById('primaryColor').addEventListener('input', e => {
  document.documentElement.style.setProperty('--primary-color', e.target.value);
});

document.getElementById('secondaryColor').addEventListener('input', e => {
  document.documentElement.style.setProperty('--secondary-color', e.target.value);
});

document.getElementById('logoInput').addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  const preview = document.getElementById('logoPreview');
  preview.src = url;
  document.getElementById('logoPrimary').src = url;
  document.getElementById('logoSecondary').src = url;
});

document.querySelectorAll('input[name="headingStyle"]').forEach(radio => {
  radio.addEventListener('change', e => {
    document.documentElement.setAttribute('data-heading', e.target.value);
  });
});

populateFonts();
