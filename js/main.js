function generateRandomArray(
  totalLength,
  numDigits,
  repetitions,
  useNumDigits = true
) {
  if (totalLength % repetitions !== 0) {
    console.error(
      "Количество элементов массива должно быть кратным количеству повторений."
    );
    return [];
  }
  let array = [];
  const uniqueNumbers = totalLength / repetitions;
  for (let i = 0; i < uniqueNumbers; i++) {
    let randomNumber;
    if (useNumDigits) {
      randomNumber = Math.floor(Math.random() * Math.pow(10, numDigits)) + 1;
    } else {
      randomNumber = Math.floor(Math.random() * 1000) + 1; // Пример генерации чисел без учета количества знаков (можно изменить по желанию)
    }
    for (let j = 0; j < repetitions; j++) {
      array.push(randomNumber);
    }
  }
  if (repetitions !== 1) {
    shuffleArray(array);
  }
  return array;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function serializeArray(array) {
  return array.join(",");
}

function deserializeString(serializedString) {
  return serializedString.split(",").map(Number);
}

function calculateCompressionRatio(originalLength, compressedLength) {
  return (originalLength - compressedLength) / originalLength;
}

const arrTests = [
  { totalLength: 50, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 50, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 50, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 100, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 100, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 100, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 500, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 500, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 500, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 1000, numDigits: 1, repetitions: 1, useNumDigits: true },
  { totalLength: 1000, numDigits: 2, repetitions: 1, useNumDigits: true },
  { totalLength: 1000, numDigits: 3, repetitions: 1, useNumDigits: true },
  { totalLength: 900, numDigits: 1, repetitions: 3, useNumDigits: true },
];

arrTests.forEach((e) => {
  let myArray = generateRandomArray(
    e.totalLength,
    e.numDigits,
    e.repetitions,
    e.useNumDigits
  );
  console.log("Исходный массив:", myArray);

  let serializedString = serializeArray(myArray);
  console.log("Сериализованная строка:", serializedString);

  let deserializedArray = deserializeString(serializedString);
  console.log("Десериализованный массив:", deserializedArray);

  let compressionRatio = calculateCompressionRatio(
    myArray.length * 3,
    serializedString.length
  );
  console.log("Коэффициент сжатия:", compressionRatio);

  console.log(
    "==========================================================================================",e
  );
});
