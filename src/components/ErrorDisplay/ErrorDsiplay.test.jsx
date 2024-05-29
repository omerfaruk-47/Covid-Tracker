import { render, screen } from "@testing-library/react";
import ErrorDisplay from ".";
import { userEvent } from "@testing-library/user-event";

describe("Error display bileşeni", () => {
  beforeEach(() => {
    //testin çalışmasından hemen önce
  });

  beforeAll(() => {
    //test çalışmasından hemen sonra
  });

  test("Doğru mesejı gösterir", () => {
    const errorMessage = "404 conten was not found";
    render(<ErrorDisplay message={errorMessage} retry={() => {}} />);

    //doğru hata mesajına sahip yazı var mı?
    screen.getByText(errorMessage);

    //gerek yok
    //expect(item).toBeInTheDocument()
  });

  test("Tekrar buttonuna tıklanınca fonksiyon çalışır", async () => {
    //usereVENT kurulum
    const user = userEvent.setup();

    //bir test /mock fonksiyonu oluştur
    const retryMock = jest.fn();
    //bileşeni renderla
    render(<ErrorDisplay message={"xxx"} retry={retryMock} />);

    //butonu çağır
    const button = screen.getByRole("button");

    //butona tıkla
    await user.click(button);

    //fonksiyon çağrıldı mı?
    expect(retryMock).toHaveBeenCalled();
  });
});
