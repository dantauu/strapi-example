import type { Schema, Struct } from '@strapi/strapi';

export interface CommonGlobal extends Struct.ComponentSchema {
  collectionName: 'components_common_globals';
  info: {
    displayName: 'global';
  };
  attributes: {
    contact: Schema.Attribute.Component<'global.contact', true>;
    phoneNumber: Schema.Attribute.String;
    workingHours: Schema.Attribute.Component<'global.working-hours', true>;
  };
}

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
  };
}

export interface GlobalContact extends Struct.ComponentSchema {
  collectionName: 'components_global_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    telegram: Schema.Attribute.String;
    viber: Schema.Attribute.String;
    whatsapp: Schema.Attribute.String;
  };
}

export interface GlobalWorkingHours extends Struct.ComponentSchema {
  collectionName: 'components_global_working_hours';
  info: {
    displayName: 'working-hours';
    icon: 'briefcase';
  };
  attributes: {
    from: Schema.Attribute.String;
    to: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.global': CommonGlobal;
      'common.seo': CommonSeo;
      'global.contact': GlobalContact;
      'global.working-hours': GlobalWorkingHours;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
