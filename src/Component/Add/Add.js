import * as S from './AddStyle';
import AddTemplate from './AddTemplate/AddTemplate';
import TitleTemplate from './TitleTemplate/TitleTemplate';

export default function Add() {
  return (
    <S.Add>
      {/* <TitleTemplate title={title} />
      <AddTemplate subTitle={subtitle} /> */}
      <TitleTemplate />
      <AddTemplate />
    </S.Add>
  );
}
