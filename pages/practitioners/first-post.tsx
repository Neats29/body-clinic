import Link from "next/link";
import Head from "next/head";
// import styled from 'styled-components'
// import { Container } from '../../components/sharedStyles'
import Container from '@mui/material/Container';


export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Practitioners</title>
      </Head>
      <Container>
        <h1>First post</h1>
        <h2>
            <Link href="/">Back to home</Link>
        </h2>
      </Container>
    </>
  );
}
