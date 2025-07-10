<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kpi>
 */
class KpiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'titulo' => $this->faker->randomElement([
                'Vendas do Dia',
                'Visitas do Site',
                'Novos Usuários',
                'Pedidos Finalizados',
            ]),
            'valor' => $this->faker->randomFloat(2, 0, 5000),
            'variacao_percentual' => $this->faker->randomFloat(2, -10, 10),
        ];
    }
}
