import type { GetServerSideProps, NextPage } from "next";

export const getServerSideProps: GetServerSideProps = async (context) => {

  return {
    props: {
      cookies: context.req.cookies ? JSON.stringify(context.req.cookies) : 'Пусто',
      cookies2: context.req.headers.cookie ? context.req.headers.cookie : 'Пусто'
  }
};
}


const Test: NextPage = ({cookies, cookies2}: any) => {

  return (
    <div>
      <div>Cookie 1 - {cookies}</div>
      <div>Cookie 2 - {cookies2}</div>
    </div>
    
  )
}

export default Test;