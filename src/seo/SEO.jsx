import React from 'react'

function SEO({ title, description, link }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta
                name="description"
                content={description}
                link={link} />
        </Helmet>
    )
}

export default SEO
