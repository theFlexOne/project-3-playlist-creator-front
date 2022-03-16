import React, { useEffect, useState } from "react";
import NavTabs from "../../components/NavTabs/NavTabs";
import PageContent from "../../components/PageContent/PageContent";
import PageInput from "../../components/PageInput/PageInput";
import StyledButton from "../../components/StyledButton/StyledButton";
import StyledTextField from "../../components/StyledTextField/StyledTextField";
import "./myMusic.css";
import useBackend from "../../hooks/useBackend";
import { useLocation, useParams } from "react-router-dom";
import Records from "../../components/Records/Records";
import RecordInfo from "../../components/RecordInfo/RecordInfo";

const MyMusic = ({ tabs }) => {
  const [activeModel, setActiveModel] = useState(null);

  const backend = useBackend();
  const { pathname } = useLocation();
  const endpoint = pathname.match("[^/]*$")[0];

  useEffect(() => {
    const endpoint = [...pathname.matchAll("[^/]+")][1][0] || null;
    console.log(endpoint);
    if (endpoint) {
      backend
        .fetchModel(endpoint)
        .then((model) => setActiveModel(model))
        .catch((err) => console.warn(err));
    }
  }, [pathname]);

  activeModel && console.log(activeModel);

  return (
    <div className="main-content">
      <NavTabs tabs={tabs} />
      <PageInput></PageInput>
      {activeModel && (
        <PageContent>
          <Records className={endpoint} model={activeModel} />
          <RecordInfo></RecordInfo>
        </PageContent>
      )}
    </div>
  );
};

export default MyMusic;
