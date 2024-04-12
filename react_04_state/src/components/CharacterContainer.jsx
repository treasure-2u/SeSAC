import { useState } from "react";
import CharacterInfo from "./CharacterInfo";

export default function CharacterContainer() {
  const [characters, setCharacters] = useState([
    {
      id: 1,
      name: "뽀로로",
      age: "7",
      nickName: "사고뭉치",
    },
    {
      id: 2,
      name: "루피",
      age: "5",
      nickName: "공주님",
    },
    {
      id: 3,
      name: "크롱",
      age: "4",
      nickName: "장난꾸러기",
    },
  ]);

  // 조건부 렌더링(선택된 캐릭터의 정보를 객체 형태로 저장하기 위한 state 선언 및 초기값 null로 설정하여 CharacterInfo 컴포넌트를 렌더링 하지 말라는 조건)
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleClick = (name) => {
    // selected에 객체의 이름값과 선택된 버튼 이름값이 같다면 객체 저장됨
    // 저장된 객체를 setSelectedCharacter에 보내주며, 변경된 state 값이 리렌더링 일어나며 바뀜
    const selected = characters.find((character) => character.name === name);
    console.log(selected);
    setSelectedCharacter(selected);
  };

  return (
    <div>
      {/* characters array 순회하며 btn 렌더링 */}
      {characters.map((character) => (
        <button key={character.id} onClick={() => handleClick(character.name)}>
          {character.name}
        </button>
      ))}
      {/* selectedCharacter state의 값이 없는 경우 CharacterInfo 컴포넌트 렌더링 X */}
      {selectedCharacter && <CharacterInfo characterInfo={selectedCharacter} />}
    </div>
  );
}
