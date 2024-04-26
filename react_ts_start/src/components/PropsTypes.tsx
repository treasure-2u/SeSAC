interface Props {
  userName: string;
  userLevel: number;
  mainCham?: string;
}

// export default function PropsTypes({ userName, userLevel }: Props) {
//   return (
//     <>
//       <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
//       <div>userName: {userName}</div>
//       <div>userLevel: {userLevel}</div>
//     </>
//   );
// }

export default function PropsTypes(props: Props) {
  const { userName, userLevel } = props;

  return (
    <>
      <h2>props로 전달받은 데이터의 타입 interface로 지정하기</h2>
      <div>userName: {userName}</div>
      <div>userLevel: {userLevel}</div>
      {props.mainCham && <div>mainCham: {props.mainCham}</div>}
    </>
  );
}
