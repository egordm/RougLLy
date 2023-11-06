import {Autocomplete, TextField} from "@mui/material";
import React from "react";
import {MODELS} from "../../../constants";
import {useEstimationContext} from "../../../providers/EstimationProvider";
import {Instance, Model} from "../../../schema/components";
import {useEntitiesContext} from "../../../providers/EntitiesProvider";


export const ModelSelection = () => {
    const {params, setParams} = useEstimationContext();
    const {models} = useEntitiesContext();

    const onChange = (event: any, value: Model | null) => {
        if (value) {
            setParams({
                ...params,
                model: value
            })
        }
    }

    return (
        <Autocomplete
            disablePortal
            value={params.model}
            options={models}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => <TextField {...params} label="Model"/>}
            onChange={onChange}
        />
    )
}