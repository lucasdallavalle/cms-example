import type { Schema, Attribute } from '@strapi/strapi';

export interface ConteudoBanners extends Schema.Component {
  collectionName: 'components_conteudo_banners';
  info: {
    displayName: 'Banners';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Desktop: Attribute.Media;
    Mobile: Attribute.Media;
    Descricao: Attribute.String;
  };
}

export interface ProdutosCategorias extends Schema.Component {
  collectionName: 'components_produtos_categorias';
  info: {
    displayName: 'Categorias';
    icon: 'bulletList';
  };
  attributes: {
    Codigo: Attribute.String & Attribute.Required;
    Nome: Attribute.Text & Attribute.Required & Attribute.Unique;
    Ativo: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
  };
}

export interface ProdutosProdutos extends Schema.Component {
  collectionName: 'components_produtos_produtos';
  info: {
    displayName: 'Produtos';
    icon: 'shirt';
  };
  attributes: {
    GTIN: Attribute.String;
    Nome: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
    Imagens: Attribute.Media & Attribute.Required;
    Ativo: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<true>;
    Descricao: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'conteudo.banners': ConteudoBanners;
      'produtos.categorias': ProdutosCategorias;
      'produtos.produtos': ProdutosProdutos;
    }
  }
}
