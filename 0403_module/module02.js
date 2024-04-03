// es6
// 바로 export

export const animals = ["monkey", "lion", "cat", "dog", "rabbit"];

export function showAnimals() {
  animals.forEach((ani) => console.log(ani));
}

export const addAnimal = (newAni) => {
  // animals 배열에 인자로 전달받은 newAni를 추가한 후 해당 배열 반환 함수
  animals.push(newAni);

  return animals;
};

/*
export const addAnimal2 = (newAni) => {
  // animals 배열에 인자로 전달받은 newAni를 추가한 후 해당 배열 반환 함수
  const newAniarr = animals; // 계속 위 배열만 받아오기 때문에 갯수가 animals.length +1 을 벗어나지 못한다는 단점 존재!
  newAniarr.push(newAni);

  return newAniarr;
};
*/
