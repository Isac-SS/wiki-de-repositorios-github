import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="blank">Ver repositório</a><br />
        <a href="#" rel="noreferrer" className="remover">Remover</a>
        <hr /> 
    </ItemContainer>
  )
}

export default ItemRepo;
