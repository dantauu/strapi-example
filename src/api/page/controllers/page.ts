const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::page.page', ({ strapi }) => ({
    async findBySlug(ctx) {
        const { slug } = ctx.params;

        const page = await strapi.db.query('api::page.page').findOne({
            where: { title: slug },
            populate: ['seo']
        });

        if (!page) return ctx.notFound(`Page "${slug}" not found`);
        return page;
    },
}));
