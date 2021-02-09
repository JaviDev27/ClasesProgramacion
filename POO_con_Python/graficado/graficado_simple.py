from bokeh.plotting import figure, output_file, show

if __name__ == '__main__':
    output_file('graficado_simple.html')
    fig = figure()

    total_valores = int(input('Cuantos valores quieres graficar: '))
    x_vals = list(range(total_valores))
    y_vals = []

    for x in x_vals:
        val = int(input(f'Ingresa el valor "y" para x:{x} -- '))
        y_vals.append(val)

    fig.line(x_vals, y_vals, line_width=2)
    show(fig)
