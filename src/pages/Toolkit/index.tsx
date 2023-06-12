import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { Content, GridCards } from "./styles";
import { api } from "../../services/api";
import { ITool } from "./types";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Toolkit = () => {
  const [allTools, setAllTools] = useState<ITool[]>([]);
  const [result, setResult] = useState<ITool[]>([]);

  const [stage, setStage] = useState('');
  const [effort, setEffort] = useState("0");

  useEffect(() => {
    api.get("/Tools/list").then((response) => {setAllTools(response.data); setResult(response.data)});
  }, []);

  useEffect(() => {
    applyFilters();
  }, [stage, effort]);

  const applyFilters = () => {

    const filteredTools = allTools.filter((tool) => {

      // Filtra por método
      if (stage && stage !== tool.Stage_idStage) {
        return false;
      }
    
      // Filtra por nível de esforço
      if (effort && effort !== parseFloat(tool.effort) ) {
        return false;
      }

      return true;
    });

    setResult(filteredTools);
  };
  
  console.log(effort);

  
  return (
    <>
      <Header />

      <Content>
        <Button name="ANALISAR" onClick={() => setStage('3')}/>
        <Button name="PROJETAR" onClick={() => setStage('4')}/>
        <Button name="AVALIAR" onClick={() => setStage('5')}/>

        <label htmlFor="effort">Esforço</label>

        <input
          type="range"
          value={effort}
          onChange={(e) => setEffort(e.target.value)}
          name="effort"
          min={0}
          max={3}
        />
{/* 
        {isFilter ? (
          <span
            onClick={() => {
              setIsFilter(false);
            }}
          >
            Limpar filtro
          </span>
        ) : null} */}
        <GridCards>
          {result.map((tool) => (
            <Link to={`${tool.id}`}>
              <Card
                name_pt={tool.name_pt}
                stage_id={tool.Stage_idStage}
                name_en={tool.name_en}
              />
              esforço: {tool.effort}
            </Link>
          ))}
        </GridCards>
      </Content>
    </>
  );
};

export default Toolkit;
