export default function CharacterInfo({ characterInfo }) {
  return (
    <>
      <div>Name: {characterInfo.name}</div>
      <div>Age: {characterInfo.age}</div>
      <div>NickName: {characterInfo.nickName}</div>
    </>
  );
}
