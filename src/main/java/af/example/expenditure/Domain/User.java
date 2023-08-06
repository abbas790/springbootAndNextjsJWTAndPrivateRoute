package af.example.expenditure.Domain;
import java.util.Collection;
import java.util.List;
import java.util.Set;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Data
@Entity
@Builder
@Setter
@Getter
@Table(name = "tbl_user")
@AllArgsConstructor
@NoArgsConstructor
public class User implements UserDetails{
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  @Id
  private Long id;
  @NotBlank
  private String firstname;
  @NotBlank
  private String lastname;
 @NotBlank
  private String email;
 @NotBlank
 @Size(min = 8)
  private String password;
 
 @Enumerated
  private Role role;

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
   return List.of(new SimpleGrantedAuthority(role.name()));
  }

  @Override
  public String getPassword() {
   return password;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }

  @Override
  public String getUsername() {
    return email;
  }
   
}
