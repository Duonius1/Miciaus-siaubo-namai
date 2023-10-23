import { useEffect, useState } from "react";
import "./App.css";
//cia importint fotkes naudojamas (t.y. sponsoriai vadovai orgai)
import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";

/* cia krc ju laikrodukas visas, @mui ir icons material viska suinstallinau (is to ko mums cj reikes)

const App: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  let interval: NodeJS.Timer;

  function SetClock(difference: number) {
    if (difference <= 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
      return;
    }
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    setDays(d);

    const h = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(h);

    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    setMinutes(m);

    const s = Math.floor((difference % (1000 * 60)) / 1000);
    setSeconds(s);
  }
  const target = new Date("10/26/2023 02:59:59");

  useEffect(() => {
    let difference = target.getTime() - Date.now();
    SetClock(difference);
    interval = setInterval(() => {
      difference = target.getTime() - Date.now();
      SetClock(difference);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <div className="Heading">ATGAL Į KATEITĮ</div>
      <div className="Left">IKI RENGINIO PABAIGOS LIKO</div>
      <div className="delayed">
        <div className="Clock mobile-noshow">
          <div className="DM">
            {days < 10 ? "0" : ""}
            {days}:
          </div>
          <div className="HS">
            {hours < 10 ? "0" : ""}
            {hours}:
          </div>
          <div className="DM">
            {minutes < 10 ? "0" : ""}
            {minutes}:
          </div>
          <div className="HS">
            {seconds < 10 ? "0" : ""}
            {seconds}
          </div>
        </div>
        <div className="Clock mobile">
          <div className="DM">
            {days < 10 ? "0" : ""}
            {days}
          </div>
          <div className="HS">
            {hours < 10 ? "0" : ""}
            {hours}
          </div>
          <div className="DM">
            {minutes < 10 ? "0" : ""}
            {minutes}
          </div>
          <div className="HS">
            {seconds < 10 ? "0" : ""}
            {seconds}
          </div>
        </div>
      </div>
    </div>
  );
};
*/
