import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { useParams, Link } from "react-router-dom";
import { api } from "../../services/api";
import { Content, Steps, ItensContent, HeaderContent, Nav } from "./styles";
import TimeLineOrbis from "../../components/TimeLine";
import CardTools from "../../components/CardTools";
import Tips from "../../components/CardTips";
import { imgTool } from "./utils";
import alertModal from "../../assets/icon/alertModal.svg";
import Button from "../../components/Button";
import Arrow from '../../assets/form_assests/arrow-back.svg';
import ExtraMaterials from "../../components/ExtraMaterials";

interface ITool {
  name_pt: string;
  name_en: string;
  time: number;
  effort: number;
  Stage_idStage: string;
  templateName: string;
  icon: string;
  tip: string;
  toUse?: string;
  alert?: string;
}

interface ISteps {
  id: number;
  title: string;
  description: string;
  alert: string;
}

const Tool = () => {
  const params = useParams();
  const [ extraMaterial, setExtraMaterial ] = useState(false);

  const [tool, setTool] = useState<ITool>({
    name_pt: "",
    name_en: "",
    time: 0,
    effort: 0,
    Stage_idStage: "",
    templateName: "",
    icon: "",
    tip: ""
  });
  const [steps, setSteps] = useState<ISteps[]>([]);

  useEffect(() => {
    api
      .get(`/Tools/list/${params.idTool}`)
      .then((response) => setTool(response.data));
  }, []);

  useEffect(() => {
    api
      .get(`/Step/list/${params.idTool}`)
      .then((response) => setSteps(response.data));
  }, []);

  document.title = `${tool.name_pt} - Orbis`;

  const handleExtraMaterials = () => {
    if(extraMaterial) {
      setExtraMaterial(false);
    } else {
      setExtraMaterial(true);
    }
    
  }

  return (
    <>
      <Header />
      
      <Content variant={tool.templateName}>
        <Nav>
          <Link to="../toolkit">Toolkit</Link>
          <img src={Arrow} style={{ transform: 'rotate(180deg)'}}/>
          <p>{tool.name_pt}</p>
        </Nav>
        <HeaderContent>
          <div id="tool-header">
            <img
              src={`https://alairtonjr.com/imgs_icon/` + tool.icon}
              alt="Ícone"
            />
            <div>
              <h1>{tool.name_pt}</h1>
              <h2>{tool.name_en}</h2>
            </div>
          </div>
            <Button
              name={extraMaterial ? "Ver Informações" : "Materiais extras"}
              onClick={handleExtraMaterials}
              variant={tool.templateName}
            />
        </HeaderContent>
        <ItensContent variant={tool.templateName}>
          <div>
            <CardTools
              valueTime={tool.time}
              valueEffort={tool.effort}
              variant={tool.templateName}
              stage_id={tool.Stage_idStage}
            />
          </div>
          { !extraMaterial ? (<div>
            <h3 id="WhyUseTitle">QUANDO USAR</h3>
            <p id="WhyUseText">
              {tool.toUse}
            </p>
            <div id={tool.alert ? "alert" : ''}>
                <img id={tool.alert ? "imgAlert" : 'NoImgAlert'} src={alertModal}/>
                <p>{tool.alert}</p>
            </div>
            <img id={imgTool(tool.name_pt) ? "ImgTool" : ""} src={imgTool(tool.name_pt)} />
            <h3 id="WhyUseTitle">PASSO-A-PASSO</h3>
            <Steps>
              {steps.map((step) => (
                <>
                  <TimeLineOrbis
                    title={step.title}
                    description={step.description}
                    number={steps.indexOf(step) + 1}
                    variant={tool.Stage_idStage}
                    alert = {step.alert}
                  />
                </>
              ))}
            </Steps>
            <Tips text={tool.tip} template={tool.templateName} />
          </div>) :
            (
              <div>
                <h3 id="WhyUseTitle">MATERIAIS EXTRAS</h3>
                <ExtraMaterials name={tool.name_pt}/>
              </div>
            )
          }
        </ItensContent>
      </Content>
    </>
  );
};

export default Tool;
