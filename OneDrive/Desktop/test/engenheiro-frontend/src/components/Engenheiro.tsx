import React from 'react';

interface EngenheiroProps {
    title?: string;
    description?: string;
}

const Engenheiro: React.FC<EngenheiroProps> = ({ title = "Engenheiro", description = "Seção do Engenheiro" }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
};

export default Engenheiro;