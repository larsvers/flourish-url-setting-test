function ready() {
  // Updateing the line chart.
  // ------------------------

  // These are the settings we want to change.
  const lineSettings = {
    series_filter: ['BEN'],
  };

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

  // Updateing the bar chart.
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

document.body.onload = ready;
