import { useEffect, useState } from "react"
import './ApiPush.scss';

export default function ApiPush() {
    const [skus, setSkus] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetch('https://cloudbilling.googleapis.com/v1/services/6F81-5844-456A/skus?key=AIzaSyCTBeqeAj8yi6TAk-Jm5PCbUalkaM4nLHU')
            .then(resposta => resposta.json())
            .then(dados => {
                setSkus(dados.skus); // Atribua somente o array "skus" ao estado
            })
            .catch(error => {
                console.log('Erro ao buscar dados da API:', error);
            });
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredSkus = skus.filter((sku) => {
        return sku.description.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <>
            <h1>Apresentação inicial de dados</h1>
            <input type="text" value={searchTerm} onChange={handleSearchChange} />
            <div className="">
                {filteredSkus.length > 0 ? (
                    filteredSkus.map((sku) => (
                        <div className="tabela" key={sku.description}>

                            <p>Descricao: {sku.description}</p>

                            <p> Grupo do recurso: {sku.category.resourceGroup}</p>
                            <p>{sku.category.usageType}</p>
                            <p>{sku.serviceRegions.usageType}</p>
                            <h3>Pricing Info:</h3>
                            {sku.pricingInfo.map((pricing) => (
                                <div key={pricing.summary}>
                                    <h4>Tiered Rates:</h4>
                                    {pricing.pricingExpression.tieredRates.map((tieredRate) => (
                                        <div key={tieredRate.startUsageAmount}>
                                            <p>Currency Code: {tieredRate.unitPrice.currencyCode}</p>
                                            <p>Unit Price: {tieredRate.unitPrice.nanos}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            {/* Renderize outros dados específicos do SKU aqui */}
                        </div>
                    ))
                ) : (
                    <p>Problemas no serviço de API</p>
                )}
            </div>
        </>
    );
}