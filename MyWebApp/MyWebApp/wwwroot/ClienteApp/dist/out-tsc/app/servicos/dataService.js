"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var pedido_1 = require("../modelos/pedido");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.pedido = new pedido_1.Pedido();
    }
    DataService.prototype.carregarProdutos = function () {
        var _this = this;
        return this.http.get("/api/produto").map(function (result) { return _this.produtos = result.json(); });
    };
    DataService.prototype.adicionarProduto = function (produto) {
        var itemSelecionado = this.pedido.ItensPedidos.find(function (i) { return i.Produto.id == produto.id; });
        if (itemSelecionado) {
            itemSelecionado.Quantidade++;
        }
        else {
            var item = void 0;
            item = new pedido_1.ItemPedido();
            item.Produto.id = produto.id;
            item.Produto.nome = produto.nome;
            item.Produto.descricao = produto.descricao;
            item.Produto.preco = produto.preco;
            item.Quantidade = 1;
            this.pedido.ItensPedidos.push(item);
        }
    };
    DataService.prototype.efetivarCompra = function () {
        var _this = this;
        return this.http.post("/api/pedido", this.pedido)
            .map(function (resposta) {
            _this.pedido = new pedido_1.Pedido();
            return true;
        });
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map