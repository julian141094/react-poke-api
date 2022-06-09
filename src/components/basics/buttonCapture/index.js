import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import services from "../../../services";

const ButtonCaptured = (props) => {
  const { id } = props;
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await services.captured.isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const onReloadCheckFavorite = () => {
    setReloadCheck((prev) => !prev);
  };

  const addFavorite = async () => {
    try {
      await services.captured.addPokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  const removeFavorite = async () => {
    try {
      await services.captured.removePokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        variant={isFavorite ? "warning" : "success"}
        onClick={() => (isFavorite ? removeFavorite() : addFavorite())}
      >
        {isFavorite ? "Captured" : "Capture"}
      </Button>
    </>
  );
};

export default ButtonCaptured;
