import { factories } from "@strapi/strapi";

export default factories.createCoreController('api::page.page', ({ strapi }) => ({
    async findBySlug(ctx) {
        const { slug } = ctx.params;

        const page = await strapi.db.query('api::page.page').findOne({
            where: { title:  slug},
            populate: ['seo']
        });

        if (!page) return ctx.notFound('Page not found');
        return page;
    },
}));
