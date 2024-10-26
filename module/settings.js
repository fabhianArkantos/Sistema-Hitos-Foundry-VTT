
export function registerSettings() {
    game.settings.register("hitos", "mentalHealthEnabled", {
        name: client.Localization.localize("Hitos.EnableMentalHealth"),
        hint: client.Localization.localize("Hitos.EnableMentalHealthHint"),
        scope: "world",
        config: true,
        type: Boolean,
        default: true,
    });

    game.settings.register("hitos", "gameModule", {
        name: client.Localization.localize("Hitos.EnableMentalHealth"),
        hint: client.Localization.localize("Hitos.EnableMentalHealthHint"),
        scope: "world",
        config: true,
        requiresReload: true,
        type: String,
        choices: {
            "cultos": client.Localization.localize("Hitos.CultosInnombrables"),
            "lcdt": client.Localization.localize("Hitos.LasCorrientesDelTiempo"),
            "core": client.Localization.localize("Hitos.Core")
        },
        default: "cultos",
    });
}
