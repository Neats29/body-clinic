import Head from "next/head";
import Link from "next/link";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

export default function Home() {
  return (
    <>
      <Container>
        <Head>
          <title>The Body Clinic</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1>Welcome to the Body Clinic</h1>
        <Paper sx={{ padding: 5, backgroundColor: "rgb(245, 245, 245)" }}>
          <Stack spacing={2}>
            {practitioners.map(p => {
              return <Practitioner {...p} />;
            })}
          </Stack>
        </Paper>
        <Card variant="outlined">
          <h1 className="title">
            Read <Link href="/practitioners/first-post">this page!</Link>
          </h1>
        </Card>
      </Container>
    </>
  );
}

const practitioners = [
  {
    name: "Sarah Smith",
    avatar: "/images/sarah.jpg",
    title: "Sarah Smith - Osteopath",
    description:
      "Sarah is an experienced Osteopath specilising in climbing injuries, newborn babies and pregnant women."
  },
  {
    name: "Nick Johnson",
    avatar: "/images/nick.jpg",
    title: "Nick Johnson - Sports Massage",
    description:
      "Nick is an experienced sports massage practitioner specilising in injuries, and posture concerns."
  },
  {
    name: "Samantha Waters",
    avatar: "/images/sam.jpg",
    title: "Samantha Waters - Clinical Breathwork Practitioner",
    description:
      "Samantha is an experienced clinical breathwork practitioner, she helps resolve PTSD, anxiety and repatterning breathing post surgery."
  }
];

const Practitioner = ({ name, avatar, title, description }) => {
  return (
    <Card variant="outlined" sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        <Grid xs={2} display="flex">
          <Avatar alt={name} src={avatar} sx={{ width: 120, height: 120 }} />
        </Grid>
        <Grid xs={8}>
          <h2>{title}</h2>
        </Grid>
        <p>{description}</p>
      </Grid>
    </Card>
  );
};
