import styled from "styled-components";

const H3 = styled.h3`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
`;

const ImageWrap = styled.div`
  max-width: 800px;
`;

const Img = styled.img`
  width: calc(100% / 4.5);
  margin-right: calc(100% / 4.5 / 6);
  margin-bottom: calc(100% / 4.5 / 6);
  &:nth-child(4n) {
    margin: 0;
    margin-bottom: calc(100% / 4.5 / 6);
  }
`;

const Icon = styled.img`
  margin-right: 0.5rem;
`;

const DietImage = props => {
  const { images = [] } = props;
  return (
    <div>
      <H3>
        {images.length ? (
          <Icon src="/icons/existDiet.svg" />
        ) : (
          <Icon src="/icons/noneDiet.svg" />
        )}
        {images.length ? "식단" : "식단 X"}
      </H3>
      <ImageWrap>
        {images.map((src, idx) => {
          return <Img key={idx} src={src} />;
        })}
      </ImageWrap>
    </div>
  );
};

export default DietImage;
