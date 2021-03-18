/* eslint-disable no-undef */
function ready(data) {
  // Updating the line chart.
  // ------------------------

  // Check if country data exists.
  const hasData1 = data.filter(d => d.iso_code === 'BEN')[0].data1;

  // These are the settings we want to change.
  let lineSettings = {};
  if (hasData1) {
    lineSettings = {
      series_filter: ['BEN'],
    };
  } else {
    const note = document.querySelector('#my-line-chart .data-note');
    note.innerHTML =
      "Sorry - there's no data for Benin. But have a look at these ↑ other countries...";
  }

  // Encode the settings
  const encodedLineSettings = encodeURIComponent(JSON.stringify(lineSettings));

  // Get the iframe's src (which we will update)
  const iFrameLine = document.querySelector('#my-line-chart iframe');
  const iFrameLineURL = new URL(iFrameLine.src);
  iFrameLineURL.hash = encodedLineSettings;

  // Add the encoded settings to the iframe's src.
  setTimeout(() => {
    iFrameLine.src = iFrameLineURL.href;
  }, 2000);

  // Updating the bar chart.
  // -----------------------

  const barSettings = {
    color: {
      categorical_custom_palette: 'EGY:orange',
    },
  };

  // Encode the settings
  const encodedBarSettings = encodeURIComponent(JSON.stringify(barSettings));

  // Get the iframe's src (which we will update)
  const iFrameBar = document.querySelector('#my-bar-chart iframe');
  const iFrameBarURL = new URL(iFrameBar.src);
  iFrameBarURL.hash = encodedBarSettings;

  // Add the encoded settings to the iframe's src.
  setTimeout(() => {
    iFrameBar.src = iFrameBarURL.href;
  }, 2000);
}

function load() {
  d3.csv('data/data_availability.csv', d3.autoType).then(ready);
}

document.body.onload = load;
