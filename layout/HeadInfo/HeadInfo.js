import Head from "next/head";

const HeadInfo = props => {
  const { title, keyword, contents } = props;

  return (
    <Head>
      <title>{title}</title>
      <meta keyword={keyword} />
      <meta contents={contents} />
    </Head>
  );
};

HeadInfo.defaultProps = {
  title: "헬스 일기",
  keyword: "헬스 일기, 헬스, 헬스 일지, 헬창, 헬린이",
  contents: "개인 운동 일지입니다."
};

export default HeadInfo;
