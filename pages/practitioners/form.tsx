import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import dayjs, { Dayjs } from "dayjs";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";

export default function Form() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-09-09T21:11:54")
  );

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };
  return (
    <>
      <Container>
        <h1>Booking</h1>
        <Paper sx={{ padding: 5, backgroundColor: "rgb(245, 245, 245)" }}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Card>
                <Grid display="flex" justifyContent="center">
                  <Stack
                    spacing={3}
                    component="form"
                    sx={{
                      "& .MuiTextField-root": { m: 1, width: "25ch" },
                      backgroundColor: "white"
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <MobileDatePicker
                        value={value}
                        inputFormat="DD/MM/YYYY"
                        onChange={handleChange}
                        renderInput={params => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <TextField
                      required
                      id="outlined-required"
                      label="First name"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Second name"
                    />
                    <TextField required id="outlined-required" label="Email" />
                    <TextField id="" label="Telephone number" />
                    <Grid>
                      <Button
                        variant="contained"
                        disableElevation
                        size="large"
                        width="100%"
                      >
                        Book
                      </Button>
                    </Grid>
                  </Stack>
                </Grid>
              </Card>
            </Grid>
            <Grid xs={6}>
              <Practitioner {...prac} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}

// TODO: refactor this to be put in a redux store
//so that the form loads dynamically based on which practitioner is selected

const prac = {
  name: "Sarah Smith",
  avatar: "/images/sarah.jpg",
  title: "Sarah Smith — Osteopath",
  description:
    "Sarah is an experienced Osteopath specialising in climbing injuries, newborn babies and pregnancies."
};

const Practitioner = ({ name, avatar, title, description }) => {
  return (
    <Card sx={{ padding: 3 }}>
      <Grid container spacing={2} sx={{ margin: 2 }}>
        <Avatar alt={name} src={avatar} sx={{ width: 120, height: 120 }} />
        <Grid xs={8} display="flex" alignItems="center">
          <h2 style={{ margin: 10 }}>{title}</h2>
        </Grid>
        <Grid>
          <p>{description}</p>
          <p>1 hr</p>
        </Grid>
      </Grid>
    </Card>
  );
};
