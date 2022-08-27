const { readMultipart } = require('./readMultipart');
const { spacesUpload } = require('./spacesUpload');

async function main(args) {
  try {
    const parts = await readMultipart(args);
    const data = await spacesUpload(parts.file);
    return {
      body: data
    }
  } catch (error) {
    return {
      body: {
        error: error
      }
    }
  }
}

exports.main = main;
