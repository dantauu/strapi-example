import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::global.global', ({ strapi }) => ({
    async find(ctx) {
        const entity = await strapi.db.query('api::global.global').findMany({
            populate: [
                'siteName',
                'siteDescription',
                'defaultSeo',
                'globalData',
                "globalData.workingHours",
                "globalData.social"
            ],
        });

        const data = entity?.[0] || null

        if (!data) return ctx.notFound('Data not found');
        return data;
    },
}));
