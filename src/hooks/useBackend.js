import { useState } from "react";

const BACKEND_HOST = "http://localhost:9292";

const normalizePath = (path) => {
  if (path[0] === "/") return path.substr(1);
  return path;
};

class Backend {
  constructor(backend_url = BACKEND_HOST) {
    this.host = backend_url;
  }

  fetchResource = async function (path) {
    if (typeof path !== "string")
      throw new Error(`path must be a string. received a ${typeof path}`);
    try {
      const res = await fetch(`${BACKEND_HOST}${path}`);
      if (!res.ok) throw new Error(`Fetch failed`, res.status, res.statusCode);
      return res.json();
    } catch (err) {
      throw new Error(`Fetch failed`, err.status, err.statusCode);
    }
  };

  fetchModel = async function (model) {
    const path = normalizePath(model);
    return await this.fetchResource(`/${path}`);
  };

  fetchAvailableModels = async function () {
    const models = await (await fetch(BACKEND_HOST + "/models")).json();
    return models;
  };

  fetchPlaylists = async function () {
    const playlists = await (await fetch(BACKEND_HOST + "/playlists")).json();
    return playlists;
  };
}

const useBackend = () => {
  return new Backend();
};

export default useBackend;
