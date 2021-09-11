import styled from "styled-components";

const MemoWrap = styled.div`
  margin: 1rem 0 1.5rem;
`;

const H3 = styled.h3`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const P = styled.p`
  margin: 0.3rem 0;
`;

const Icon = styled.img`
  margin-right: 0.5rem;
`;

const Memo = props => {
  const { memos } = props;
  const length = memos.length;

  return (
    <MemoWrap>
      <H3>
        {length ? (
          <Icon src="/icons/existNote.svg" />
        ) : (
          <Icon src="/icons/noneNote.svg" />
        )}
        {length ? "메모" : "메모 X"}
      </H3>
      {memos.map(memo => {
        return <P key={memo}>* {memo}</P>;
      })}
    </MemoWrap>
  );
};

export default Memo;
