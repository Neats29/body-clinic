import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";

export const Practitioner = ({ name, avatar, title, description }) => {
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
