function ready() {
  // These are the settings we want to change.
  const specificSettings = {
    series_filter: ['BEN'],
  };

  // Encode the settings
  const encodedSettings = encodeURIComponent(JSON.stringify(specificSettings));

  // Get the iframe's src (which we will update)
  const iFrame = document.querySelector('#my-line-chart iframe');
  const iFrameURL = new URL(iFrame.src);
  iFrameURL.hash = encodedSettings;

  // Add the encoded settings to the iframe's src.
  setTimeout(() => {
    iFrame.src = iFrameURL.href;
  }, 2000);
}

document.body.onload = ready;
