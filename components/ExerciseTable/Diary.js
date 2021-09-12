import { useCallback, useState } from "react";
import styled from "styled-components";
import { FirstChartUpperCase } from "utils/text";
import DietImage from "./DietImage";
import Memo from "./Memo";

const H3 = styled.h3`
  margin: 0 1rem 0 0;
  // margin: 1rem 1rem 0 0.5rem;
`;

const Table = styled.table`
  width: 100%;
  text-align: center;
`;

const Th = styled.th`
  border: 1px solid;
  padding: 0.3rem;
`;

const Td = styled.td`
  border: 1px solid;
  padding: 0.3rem;
`;

const Button = styled.button`
  background: #f8f0df;
  border: 1px solid #9d9d9d;
  border-radius: 8px;
  height: 2rem;
  margin-right: 0.3rem;
`;

const Diary = props => {
  const { date, exercise, order, memo: exerciseMemo } = props;

  const [diet, setDiet] = useState(false);
  const [memo, setMemo] = useState(false);

  const handleDiet = useCallback(() => setDiet(prev => !prev), []);
  const handleMemo = useCallback(() => setMemo(prev => !prev), []);

  return (
    <div key={date} style={{ marginBottom: 30 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <H3>{date}</H3>
        <Button onClick={handleMemo}>{`메모 ${memo ? "접기" : "보기"}`}</Button>
        <Button onClick={handleDiet}>{`식단 ${diet ? "접기" : "보기"}`}</Button>
      </div>
      <Table>
        <thead>
          <tr>
            <Th>{"Exercise"}</Th>
            <Th colSpan={7}>{"Weight ( Kg / Count / Times )"}</Th>
          </tr>
        </thead>
        <tbody>
          {order.map(item => {
            const count = 7 - exercise[item].length;

            return (
              <tr key={item}>
                <Td>{FirstChartUpperCase(item)}</Td>
                {exercise[item].map((el, idx) => {
                  return (
                    <Td key={idx}>{`${el.kg}/${el.count}/${el.times}`}</Td>
                  );
                })}
                {Array(count)
                  .fill()
                  .map((_, index) => (
                    <Td key={index}>-</Td>
                  ))}
              </tr>
            );
          })}
        </tbody>
      </Table>

      {memo && <Memo memos={exerciseMemo} />}
      {diet && <DietImage />}
    </div>
  );
};

export default Diary;
