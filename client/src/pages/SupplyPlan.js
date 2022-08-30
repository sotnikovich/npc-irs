import RegionList from "../components/RegionList";
import "../index.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { CustomizedTables } from "../components/Table";
import { useState } from "react";
import { AddModal } from "../components/AddModal";
import { observer } from "mobx-react-lite";

const SupplyPlan = observer(() => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <h3 className="supply__title">Субъект РФ</h3>
      <div className="content">
        <RegionList />
        <div className="tables">
          <div className="buttons">
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <Button>Добавить</Button>
              <Button>Изменить</Button>
              <Button>Удалить</Button>
            </ButtonGroup>
            <CustomizedTables />
          </div>
        </div>
      </div>
      <AddModal open={modalVisible} onHide={() => setModalVisible(false)} />
    </>
  );
});

export default SupplyPlan;
