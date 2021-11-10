import { getDaysInMonthMode } from "components/Calendar/utils";
import { DataContext } from "context";
import { exercises } from "data";
import produce from "immer";
import { DateTime as DT } from "luxon";
import { execOnce } from "next/dist/shared/lib/utils";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DateText, FirstChartUpperCase } from "utils/text";

const exercisesSetting = [
  "squat",
  "latPullDown",
  "benchPress",
  "shoulderPressMachine",
  "hammerCurl",
  "flyMachine",
  "dumbbellCurl",
  "dips"
];

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const ModalBox = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;
  height: 860px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-bottom: 1px solid #b0bec5;
`;

const H3 = styled.h3`
  margin: 0 1rem 0 0;
`;

const MainInput = styled.div`
  background-color: #eceff1;
  padding: 15px;
  height: 750px;
`;

const Summary = styled.summary`
  margin-bottom: 0.5rem;
`;

const ExerciseListWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ExerciseWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.7rem;
  margin-bottom: 0.7rem;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
`;

const ExerciseText = styled.div``;

const ButtonWrap = styled.div`
  bottom: 0;
  padding: 15px;
  width: 100%;
  text-align: right;
  border-top: 1px solid #b0bec5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: white;
  height: 60px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  &:first-child {
    margin-right: 10px;
  }
`;

const Details = styled.details`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #b0bec5;
`;

const InputDescription = styled.span`
  display: block;
  padding: 1rem 0;
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  padding-bottom: 0.5rem;
`;

const InputInner = styled.div`
  min-width: 250px;
`;

const InputTitle = styled.h4`
  margin: 0;
  margin-bottom: 0.5rem;
`;

const InputListWrap = styled.div``;

const InputListItem = styled.input`
  width: 40px;
  height: 30px;
  margin: 0.2rem;
`;

const MemoContainer = styled.div`
  margin-top: 0.7rem;
`;

const MemoDescription = styled.span`
  display: block;
  padding: 0.7rem 0;
  margin-right: 0.3rem;
`;

const MemoWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
`;

const MemoInput = styled.input`
  width: 70%;
  height: 25px;
  border-radius: 8px;
  margin-right: 0.4rem;
`;

const Icon = styled.img`
  width: 20px;
  &:hover {
    transform: scale(1.05);
  }
`;

const SaveBtn = {
  backgroundColor: "#1687A7",
  border: "none",
  borderRadius: 8,
  boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px",
  color: "white"
};

const CloseBtn = {
  backgroundColor: "#F6F5F5",
  border: "none",
  borderRadius: 8,
  boxShadow: "rgb(0 0 0 / 24%) 0px 3px 8px"
};

const initItem = {
  kg: 0,
  count: 15,
  times: 1
};

const initValue = {
  date: null,
  exercise: {},
  memo: []
};

const ExerciseInputDialog = props => {
  const { date: upperDate, onClose } = props;
  const { dataContext } = useContext(DataContext);

  const [diary, setDiary] = useState({ ...initValue, date: upperDate });
  const [modify, setModify] = useState(false);

  const { date, exercise, memo } = diary;

  useEffect(() => {
    const date_1 = DT.fromMillis(upperDate).toFormat("yyyyMMdd");
    const result = dataContext.value.find(item => {
      const date_2 = DT.fromMillis(item.date).toFormat("yyyyMMdd");
      return date_1 === date_2;
    });
    // let newExercise = {};

    // if (Boolean(result)) {
    //   const { exercise } = result;
    //   const keys = Object.keys(exercise);
    //   keys.forEach(item => {
    //     const length = 7 - exercise[item].length;
    //     const concatArray = Array(length)
    //       .fill()
    //       .map(() => initItem);

    //     newExercise[item] = exercise[item].concat(concatArray);
    //   });

    //   console.log("####", newExercise);
    // }
    setDiary(result ? result : { ...initValue, date: upperDate });
    setModify(result ? true : false);
  }, [dataContext, upperDate]);

  return (
    <ModalWrap>
      <Bg
        onClick={e => {
          e.stopPropagation();
          onClose();
        }}
      ></Bg>
      <ModalBox
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <Title>
          <H3>
            {date && DateText(date)} {modify ? "- 수정" : "- 생성"}
          </H3>
          <Icon
            onClick={() => {
              onClose();
            }}
            src="/icons/removeIcon.svg"
          />
        </Title>
        <MainInput>
          <div>
            <Details>
              <Summary>운동 리스트</Summary>
              <ExerciseListWrap>
                {exercisesSetting.map(item => {
                  return (
                    <ExerciseWrap key={item}>
                      <Checkbox
                        type="checkbox"
                        name={item}
                        value={item}
                        checked={Object.keys(exercise).includes(item)}
                        onChange={e => {
                          const { value, checked } = e.target;

                          const newExercises = produce(exercise, draft => {
                            if (!checked) {
                              delete draft[value];
                              return draft;
                            }

                            draft[value] = Array(7)
                              .fill()
                              .map(() => item);
                          });

                          setDiary(prev => ({
                            ...prev,
                            exercise: newExercises
                          }));
                        }}
                      />
                      <ExerciseText>{FirstChartUpperCase(item)}</ExerciseText>
                    </ExerciseWrap>
                  );
                })}
              </ExerciseListWrap>
            </Details>

            {exercise && Boolean(Object.keys(exercise).length) && (
              <>
                <InputDescription>(Kg / Count / Times)</InputDescription>

                <InputWrap>
                  {Object.keys(exercise).map(item => {
                    const list = exercise[item];

                    return (
                      <InputInner key={item}>
                        <InputTitle>* {FirstChartUpperCase(item)}</InputTitle>
                        {list.map((el, idx) => {
                          const { kg, count, times } = el;
                          return (
                            <InputListWrap key={idx}>
                              <InputListItem
                                value={kg}
                                name={kg}
                                onChange={e => {}}
                              />
                              <InputListItem
                                value={count}
                                name={count}
                                onChange={e => {}}
                              />
                              <InputListItem
                                value={times}
                                name={times}
                                onChange={e => {}}
                              />
                            </InputListWrap>
                          );
                        })}
                      </InputInner>
                    );
                  })}
                </InputWrap>
              </>
            )}
          </div>
          <MemoContainer>
            <div style={{ display: "flex" }}>
              <MemoDescription>Memo</MemoDescription>
              <Icon
                onClick={() => {
                  if (memo.length >= 3) return;
                  setDiary(prev => ({
                    ...prev,
                    memo: prev.memo.concat("")
                  }));
                }}
                src="/icons/plusIcon.svg"
              />
            </div>
            {memo &&
              memo.map((item, idx) => {
                return (
                  <MemoWrap key={idx}>
                    <MemoInput
                      value={item}
                      onChange={e => {
                        const { value } = e.target;
                        const newMemos = produce(memo, draft => {
                          draft[idx] = value;
                        });
                        setDiary(prev => ({
                          ...prev,
                          memo: newMemos
                        }));
                      }}
                    />
                    <Icon
                      onClick={() => {
                        const newMemos = memo.filter(
                          (_, index) => index !== idx
                        );
                        setDiary(prev => ({
                          ...prev,
                          memo: newMemos
                        }));
                      }}
                      src="/icons/removeIcon.svg"
                    />
                  </MemoWrap>
                );
              })}
          </MemoContainer>
        </MainInput>
        <ButtonWrap>
          <Button style={SaveBtn}>저장</Button>
          <Button
            style={CloseBtn}
            onClick={() => {
              onClose();
            }}
          >
            취소
          </Button>
        </ButtonWrap>
      </ModalBox>
    </ModalWrap>
  );
};

export default ExerciseInputDialog;
