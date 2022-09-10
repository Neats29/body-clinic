import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Head from "next/head";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";

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
            {practitioners.map((p, i) => {
              return <Practitioner key={`prac-${i}`} {...p} />;
            })}
          </Stack>
        </Paper>
      </Container>
    </>
  );
}

const practitioners = [
  {
    name: "Sarah Smith",
    avatar: "/images/sarah.jpg",
    title: "Sarah Smith — Osteopath",
    description:
      "Sarah is an experienced Osteopath specialising in climbing injuries, newborn babies and pregnancies."
  },
  {
    name: "Nick Johnson",
    avatar: "/images/nick.jpg",
    title: "Nick Johnson — Sports Massage",
    description:
      "Nick is an experienced sports massage practitioner specialising in injuries, and posture concerns."
  },
  {
    name: "Sam Waters",
    avatar: "/images/sam.jpg",
    title: "Sam Waters — Clinical Breathwork Practitioner",
    description:
      "Samantha is an experienced clinical breathwork practitioner, she helps resolve PTSD, anxiety and repatterning breathing post surgery."
  }
];

const Practitioner = ({ name, avatar, title, description }) => {
  return (
    <Card variant="outlined" sx={{ padding: 3 }}>
      <Grid container spacing={4} sx={{ margin: 2 }}>
        <Avatar alt={name} src={avatar} sx={{ width: 120, height: 120 }} />
        <Grid xs={8} display="flex" alignItems="center">
          <h2 style={{ margin: 10 }}>{title}</h2>
        </Grid>
        <Grid xs={10}>
          <p>{description}</p>
          <Button variant="contained" href="/practitioners/form">
            Book
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};
