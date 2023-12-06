const TrainingRepository = require("../repository/training/training.repo");

exports.traingSlug = (traingSlug) => {
  console.log(`slugggg---------> ${traingSlug}`)
  let newTraingSlug = traingSlug.trim().toLowerCase().replace(/\s+/g, "-");

  
  return new Promise(async function (resolve, reject) {
    let responseData = await TrainingRepository.getMatchingSlug(newTraingSlug);

    if (responseData == 0) {
      resolve(newTraingSlug);
    } else {
      let trainingSlugs = responseData
        .map((obj) => obj.trainingSlug)
        .sort(function (a, b) {
          const numA = parseInt(a.split("-")[1]);
          const numB = parseInt(b.split("-")[1]);

          return numA - numB;
        });

      let lastSlug = trainingSlugs[trainingSlugs.length - 1].split(/\d+/);
      console.log(`lastsluggg---------> ${lastSlug}`)
      let lastNumber = trainingSlugs[trainingSlugs.length - 1].match(/\d+/g);
      lastNumber = Number(lastNumber) + 1
      console.log(`nummmmm---------> ${lastNumber}`)
      newTraingSlug = lastSlug[0] + lastNumber;
      resolve(newTraingSlug);
    }
  });
};
