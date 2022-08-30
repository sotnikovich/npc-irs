import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { observer } from "mobx-react-lite";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { Context } from "../index";
import { createSupply } from "../api/api";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const AddModal = observer(({ open, onClose }) => {
  const { supplies } = React.useContext(Context);
  const [name, setName] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [info, setInfo] = React.useState([]);

  const addInfo = () => {
    setInfo([
      ...info,
      {
        inn: "",
        plazma: "",
        plazmaPrice: "",
        erit: "",
        eritPrice: "",
        immg: "",
        immgPrice: "",
        alb: "",
        albPrice: "",
        id: Date.now(),
      },
    ]);
  };
  const changeInfo = (key, value, number) => {
    setInfo(
      info.map((i) => (i.number === number ? { ...i, [key]: value } : i))
    );
  };
  const addSupply = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("place", place);
    formData.append("info", JSON.stringify(info));
    createSupply(formData).then((data) => onClose());
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить поставку
          </Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Наименование организации"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-3"
              placeholder="Наименование организации"
            />
            <TextField
              id="outlined-basic"
              label="Адрес"
              variant="outlined"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              className="mt-3"
              placeholder="Адрес"
            />
            {info.map((i) => (
              <div key={i.number}>
                <div md={4}>
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.inn}
                    onChange={(e) =>
                      changeInfo("inn", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="ИНН"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.plazma}
                    onChange={(e) =>
                      changeInfo("plazma", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="плазма"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.plazmaPrice}
                    onChange={(e) =>
                      changeInfo("plazmaPrice", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="плазма цена"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.erit}
                    onChange={(e) =>
                      changeInfo("erit", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="эрит. масса"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.eritPrice}
                    onChange={(e) =>
                      changeInfo("eritPrice", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="eritPrice"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.immg}
                    onChange={(e) =>
                      changeInfo("immg", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="immg"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.immgPrice}
                    onChange={(e) =>
                      changeInfo("immgPrice", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="immgPrice"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.alb}
                    onChange={(e) =>
                      changeInfo("alb", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="alb"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={i.albPrice}
                    onChange={(e) =>
                      changeInfo("albPrice", e.target.value, i.number)
                    }
                    className="mt-3"
                    placeholder="albPrice"
                  />
                </div>
              </div>
            ))}
          </Box>
          <Button variant={"outline-dark"} onClick={addSupply}>
            Добавить
          </Button>
          <Button variant={"outline-dark"} onClick={addInfo}>
            Добавить инфо
          </Button>
        </Box>
      </Modal>
    </div>
  );
});
