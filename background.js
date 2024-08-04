chrome.commands.onCommand.addListener((command) => {
    if (command === "start-feedback") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: autoFeedback
        });
      });
    }
  });
  
  function autoFeedback() {
    const stars = document.querySelectorAll('.stars .nav li a');
    if (stars.length >= 5) {
      stars[4].click();
    } else {
      console.error('5th star not found');
      return;
    }
  
    const helpfulYes = document.getElementById('helpful_y');
    if (helpfulYes) {
      helpfulYes.click();
    } else {
      console.error('Helpful yes button not found');
      return;
    }
  
    const viewAllYes = document.getElementById('view_all_y');
    if (viewAllYes) {
      viewAllYes.click();
    } else {
      console.error('View all yes button not found');
      return;
    }
  
    const submitButton = document.querySelector('button[type="submit"]');
    if (submitButton && !submitButton.disabled) {
      submitButton.click();
    } else {
      console.error('Submit button not found or is disabled');
    }
  }
  