const gTTS = require('gtts');

function textToSpeech(text) {
  const speech = new gTTS(text, 'en');
  const outputFile = 'output/output2.mp3';
  speech.save(outputFile, function (err) {
    if (err) {
      console.error('Error converting text to speech:', err);
    } else {
      console.log(`Speech saved to ${outputFile}`);
    }
  });
}

module.exports = textToSpeech;
