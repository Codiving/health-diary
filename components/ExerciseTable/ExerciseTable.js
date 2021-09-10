import styled from "styled-components";
import { useState } from "react";

const Exercise = styled.div`
  margin: 30px 0;
  max-width: 800px;
  width: 100%;
`;

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
`;

const ExerciseTable = props => {
  const { exercises } = props;
  const [diet, setDiet] = useState(false);

  return (
    <Exercise>
      {exercises.map(item => {
        const { date, exercise, order } = item;

        return (
          <div key={date} style={{ marginBottom: 30 }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <H3>{date}</H3>
              <Button
                onClick={() => {
                  console.log("호로");
                }}
              >
                식단보기
              </Button>
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
                      <Td>{item.charAt(0).toUpperCase() + item.slice(1)}</Td>
                      {exercise[item].map((el, idx) => {
                        return (
                          <Td
                            key={idx}
                          >{`${el.kg}/${el.count}/${el.times}`}</Td>
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

            {diet && <div>식단 사진</div>}
          </div>
        );
      })}
    </Exercise>
  );
};

export default ExerciseTable;
