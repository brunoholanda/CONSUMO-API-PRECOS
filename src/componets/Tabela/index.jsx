

export default function Tabela({ 
    description, resourceGroup, usageType, serviceRegions, currencyCode, nanos
}) {
    return (
        <>
            <div>
                <div>
                    <h4>Descricao</h4>
                    <p>{description}</p>
                </div>
                <div>
                    <h4>Descricao</h4>
                    <p>{resourceGroup}</p>
                </div>
                <div>
                    <h4>Descricao</h4>
                    <p>{usageType}</p>
                </div>
                <div>
                    <h4>Descricao</h4>
                    <p>{serviceRegions}</p>
                </div>
                <div>
                    <h4>Descricao</h4>
                    <p>{currencyCode}</p>
                </div>                <div>
                    <h4>Descricao</h4>
                    <p>{nanos}</p>
                </div>
            </div>
        </>
    )
}