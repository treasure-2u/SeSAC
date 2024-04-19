import style from "../styles/moduleCss.module.css";
import className from "classname";

export default function ModuleCss() {
  return (
    <>
      <h2>ModuleCss 사용</h2>
      <div className="box">
        일반 CSS의 단점 : 같은 class명을 가지자마자 아무 스타일 적용하지 않아도
        전역적으로 적용됨(다른 컴포넌트에서 import한 css도 반영)
      </div>
      <div className={style.container}>
        moduleCss.module.css 적용(react가 해쉬값 넣어서 같은 이름을 가진
        클래스라도 안겹침)
      </div>

      <div>여러 class 지정하는 방법</div>
      <div className={`${style.first} ${style.second}`}>
        1. 템플릿 리터럴 사용
      </div>
      <div className={[style.first, style.second].join(" ")}>
        2. join method 사용
      </div>
      <div className={className(style.first, style.second)}>
        3. className module 사용
      </div>
    </>
  );
}
